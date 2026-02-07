---
title: Swift
weight: 1
slug: swift
date: 2026-02-08
lastmod: 2026-02-08
categories:
  - LLM
tags:
  - swift
  - lora
  - Qwen
  - RL
draft: false
description: 云服务器上部署swift用于微调LLM
ShowToc: true
TocOpen: true
math: true
send_email: true
---
## 服务器基本配置
### 镜像相关
pip镜像网站：
```bash
#清华镜像源安装示例
pip install ms-swift -i https://pypi.tuna.tsinghua.edu.cn/simple
```
huggingface镜像配置三件套：
```bash
export HF_ENDPOINT=https://hf-mirror.com
export HF_HUB_DISABLE_XET=1
export HF_HUB_ENABLE_HF_TRANSFER=1
```
### cache数据相关
huggingface/modelscope:
```bash
#临时
export HF_HOME=~/shared-nvme/hf_home 
export TRANSFORMERS_CACHE=~/shared-nvme/hf_cache 
export HF_DATASETS_CACHE=~/shared-nvme/hf_datasets 
export HUGGINGFACE_HUB_CACHE=~/shared-nvme/hf_cache  
export MODELSCOPE_CACHE=~/shared-nvme/modelscope 
export MS_CACHE=~/shared-nvme/ms_cache  
export TORCH_HOME=~/shared-nvme/torch_cache 
export TRITON_CACHE_DIR=~/shared-nvme/torch_cache  
export PIP_CACHE_DIR=~/shared-nvme/torch_cache
```

```bash
#永久
cat << 'EOF' >> ~/.bashrc  
# ===== AI CACHE REDIRECT ===== 
export HF_HOME=~/shared-nvme/hf_home 
export TRANSFORMERS_CACHE=~/shared-nvme/hf_cache 
export HF_DATASETS_CACHE=~/shared-nvme/hf_datasets 
export HUGGINGFACE_HUB_CACHE=~/shared-nvme/hf_cache  
export MODELSCOPE_CACHE=~/shared-nvme/modelscope 
export MS_CACHE=~/shared-nvme/ms_cache  
export TORCH_HOME=~/shared-nvme/torch_cache 
export TRITON_CACHE_DIR=~/shared-nvme/torch_cache  
export PIP_CACHE_DIR=~/shared-nvme/torch_cache  
EOF

source ~/.bashrc
```
验证是否成功：
```bash
echo $HF_HOME
```
应该显示：
```
/root/shared-nvme/hf_home
```
{{< notice info >}}
需要注意的是，我们之所以改变模型和数据默认存储位置是，为了在加快训练过程中数据到CPU内存的加载速度，所以需要把被加载的数据放在读取速度更快的地方，例如NVMe。

| 类型             | 速度  | 容量  | 成本  | 作用     |
| -------------- | --- | --- | --- | ------ |
| HDD(机械盘)       | 慢   | 大   | 便宜  | 长期存    |
| SATA SSD(固态硬盘) | 中   | 大   | 中   | 常规     |
| NVMe           | 快   | 中   | 贵   | 训练数据   |
| RAM(内存条)       | 更快  | 小   | 更贵  | CPU 工作 |
| VRAM(显存)       | 极快  | 更小  | 非常贵 | GPU 工作 |
持久存储（断电还在）（HDD/SATA SSD/NVMe）
vs
易失存储（断电就没）（RAM/VRAM）
{{< /notice >}}

### 网络代理相关
需要测试是否可以访问的外网资源：
```bash
#github
curl -I https://github.com
#huggingface
curl -I https://huggingface.co
#pypi
curl -I https://pypi.org
```
如果不行，需要配置代理，类似于：
```bash
export https_proxy="http://u-UE25Z3:tXGJgV92@10.255.128.102:3128"
export http_proxy="http://u-UE25Z3:tXGJgV92@10.255.128.102:3128"
export no_proxy="127.0.0.0/8,10.0.0.0/8,172.16.0.0/12,192.168.0.0/16,*.paracloud.com,*.paratera.com,*.blsc.cn"
```

### SSH相关
安装screen，防止远程意外断连，导致训练中断
```bash
#安装
apt update
apt install screen -y

#新建一个窗口
screen -S train

## 离开但不关闭（最重要）
#按：`Ctrl + A 然后按 D`就会看到：
#`[detached]`

## back
screen -r train

## 查看当前所有 screen
screen -ls

## 强制接管（比如掉线）
screen -dr train

## 关闭一个 screen
#进入后：
exit

#专业玩家的使用方式一般会开：
screen -S train screen -S eval screen -S debug
每个任务一个。

```
## 创建python环境
### conda 命令指南：
```bash
conda env list #查看当前环境
```
修改 conda 默认环境目录
```bash
conda config --add envs_dirs /root/shared-nvme/conda/envs
```
查看是否成功：
```bash
conda config --show envs_dirs
```
应该看到：
```
envs_dirs:                #默认安装在第一个文件夹下   
- /root/shared-nvme/envs   
- /root/miniconda3/envs   # 旧的通常还在
```
创建环境（用名字）
```bash
conda create -n oneday python=3.10
```
激活
```bash
#初次用conda激活需要初始化终端
conda init

conda activate oneday
```

## Swift
### python包
```bash
pip install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cu128
```

```bash
pip install ms-swift -i https://pypi.tuna.tsinghua.edu.cn/simple
```
需要注意的是,flash-attention 最好通过whl安装，需要选择对应版本的.whl文件，例如：flash_attn-2.7.4+cu128torch2.10-cp310-cp310-linux_x86_64.whl

查看系统版本
```bash
uname -m
```
torch版本的命令
```bash
python -c "import torch; print(torch.__version__)"
```
快速查看
```bash
python - <<EOF
import torch,platform,sys
print("python:",sys.version)
print("torch:",torch.__version__)
print("cuda :",torch.version.cuda)
print("arch :",platform.machine())
EOF
```
whl安装
```bash
#whl文件放置路径为/root/shared-nvme/wheels/
pip install /root/shared-nvme/wheels/flash_attn-xxxx.whl
#离线安装
pip install --no-index /root/shared-nvme/wheels/flash_attn-xxxx.whl
```

### 训练命令
```bash
CUDA_VISIBLE_DEVICES=0,1,2,3 \
torchrun --nproc_per_node=4 -m swift.cli.sft \
  --model Qwen/Qwen2.5-VL-7B-Instruct \
  --dataset /root/shared-nvme/LDPolypVideo/ldpolyp_multitask_train.jsonl \
  --val_dataset /root/shared-nvme/LDPolypVideo/ldpolyp_multitask_test_1500.jsonl \
  --train_type lora \
  --num_train_epochs 1 \
  --eval_steps 1000 \
  --save_total_limit 3 \
  --per_device_train_batch_size 3 \
  --attn_impl flash_attention_2 \
  --dataloader_num_workers 30 \
  --output_dir /root/shared-nvme/LDPolypVideo/lora_output
```
### 推理命令
结合vllm，需要先安装vllm
```bash
pip install vllm -i https://pypi.tuna.tsinghua.edu.cn/simple
```

```bash
NPROC_PER_NODE=4 \
CUDA_VISIBLE_DEVICES=0,1,2,3 \
swift infer \
    --model Qwen/Qwen2.5-VL-7B-Instruct \
    --adapters /root/shared-nvme/LDPolypVideo/lora_output/v0-20260203-211345/checkpoint-10330 \
    --infer_backend vllm \
    --val_dataset /root/shared-nvme/LDPolypVideo/ldpolyp_multitask_test_1500.jsonl \
    --result_path /root/shared-nvme/LDPolypVideo/preds.jsonl \
    --stream false \
    --max_new_tokens 2048 \
    --vllm_gpu_memory_utilization 0.4 \
    --vllm_max_model_len 4096 \
    --vllm_tensor_parallel_size 4 \
    --max_batch_size 1 \
    --write_batch_size 32
```