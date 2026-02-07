---
title: 少年心事当拏云
weight: 1
slug: oneday
date: 2026-01-30
lastmod: 2026-01-30
tags:
  - OneDay
draft: false
send_email: true
---
## 2026年2月7日（Sii-Day 7） 
> #### ✅ Todo
> - [ ] 完成微调技术文档，开始强化学习训练
> - [ ] 完成Ai-store 相关任务

{{< quote-center >}}
把所有的夜归还给星河，
把所有春光归还给疏疏篱落，
把所有的慵懒沉迷与不前，归还给过去的我。
明日之我，胸中有丘壑，立马振山河。
{{< /quote-center >}}



## 2026年2月6日（Sii-Day 6） 
> #### ✅ Todo
> - [ ] 完成年终总结ppt，年终组会

> #### ✅ Done
> - [x] 完成年终总结ppt，年终组会

今天年终组会，算是完成了初稿版的年终总结ppt。

不腐烂在这里，是对自己最大的尊重。

{{< figure src="/images/oneday/shanghai.jpg" align="center" caption="没戴眼镜，看不清对岸的风景，就像我看不清我的未来一样" >}}




## 2026年2月5日（Sii-Day 5） 
> #### ✅ Todo
> - [ ] 完成年终总结ppt

{{< quote-center >}}
为天地立心，为生民立命，为往圣继绝学，为万世开太平。
{{< /quote-center >}}

> #### ✅ Done
> - [ ] 完成年终总结ppt

完成了一大半，明天继续加油。

{{< figure src="/images/oneday/HNU.jpg" align="center" caption="感谢所有在我人生天色未明时出现的提灯人。" >}}


## 2026年2月4日（Sii-Day 4）
> #### ✅ Todo
> - [ ] 年终总结框架
> - [ ] 完成Qwen-2.5-7B-VL BaseLine

{{< quote-center >}}
拿破仑一世，法国人的皇帝
{{< /quote-center >}}
 
> #### ✅ Done
> - [x] 年终总结框架
> - [x] 完成Qwen-2.5-7B-VL BaseLine

swift推理命令参考（结合vllm）：
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
今天有组会，没上强度，明天上强度，希望我可以一天速通20多页的ppt。 

{{< figure src="/images/oneday/new_year.jpg" align="center" caption="希望明年是创智大楼的新年" >}}

## 2026年2月3日（Sii-Day 3）
> #### ✅ Todo
> - [ ] 开始训练Qwen-2.5-7B-VL
> - [ ] 修改GAN-for-thin-film的代码，重跑，画图

{{< quote-center >}}
皇帝又站在了巴黎的中心！
{{< /quote-center >}}

> #### ✅ Done
> - [x] 开始训练Qwen-2.5-7B-VL
> - [x] 修改GAN-for-thin-film的代码，重跑，画图 {{< sidenote >}}算是鼓起勇气从头再来了吧，真是万事开头难，从头再来更难{{< /sidenote >}}

swift训练命令参考（留作备份，这周末出一版完整的swift命令教程）：
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

再次被swift搞得怀疑人生，但是最终还是在DJ学长的帮助下，成功让模型跑起来了。{{< sidenote >}}喜极而泣，感觉很多时候要是能有这样的学长或者师兄可以挺身而出，我真的会哭死的{{< /sidenote >}}

之前埋的雷爆了，不知道为啥，代码在服务器4090上跑的会报错，主要是nan或者inf数值溢出的问题，但是在本机（4060Ti）或者服务器5090上跑不会有问题，本来以为是pytorch版本或者cuda版本的问题，但是服务器5090和4090的pytorch版本或者cuda版本是一样的，初步怀疑是随机数或者数值精度导致的溢出，先在能跑的卡上跑，埋个雷，以后有时间了来修。

今天有好长一段时间我都在反思，进组快一年了，我真的得到成长了吗？毫无疑问，是有的，但是代价也是巨大的，因为很多时候没有师兄师姐可以在我遇到问题的时候伸出援手（因为他们也不懂我面临的困境），所以我需要很长很长的时间去试错，一遍又一遍，（这里要着重感谢GPT老师，没有GPT老师，我估计早被淹死在了BUG的海洋），这样的囚徒困境磨灭了我对科研的热情，至少是当前领域的热情，我真的很希望，可以在一个能够在师兄师姐的帮助下成长的课题组，而不是要靠自己独自摸索。希望我的博士生涯不会是一个人艰难探索的旅程{{< sidenote >}}hhh，当然除了小敏以外，还希望能有其余同路人{{< /sidenote >}}

也希望，我可以尽早说出那句，轻舟已过万重山。

{{< figure src="/images/oneday/gpu_4x4090.png" align="center" caption="算力压榨到极致真的超级爽（hhhh，万恶的资本家心态）" >}}



## 2026年2月2日（Sii-Day 2）
> #### ✅ Todo
> - [ ] 修改GAN-for-thin-film的代码，重跑，画图
> - [ ] 列好年终总结的框架
> - [ ] 准备好optogpt的训练代码和数据，上传服务器

{{< quote-center >}}
如今，山中湍急的溪流早已扩展为大江，装满世界各地宝藏的大船在江面上行驶。大江涌向海洋，即将与世界上所有的水汇合......
{{< /quote-center >}}

pip 清华镜像：
```python 
pip install ms-swift -i https://pypi.tuna.tsinghua.edu.cn/simple
```

huggingface镜像三件套：
```bash
export HF_ENDPOINT=https://hf-mirror.com
export HF_HUB_DISABLE_XET=1
export HF_HUB_ENABLE_HF_TRANSFER=1
```

> #### ✅ Done
> - [ ] 修改GAN-for-thin-film的代码，重跑，画图
> - [ ] 列好年终总结的框架
> - [ ] 准备好optogpt的训练代码和数据，上传服务器

只能说配环境真是一生之敌，以及微调也是，真是连调库侠也不让我好好当。立志先做好调库侠，我一定要征服swift和llmfactory。

{{< figure src="/images/oneday/beiyang.jpg" align="center" caption="在北杨，真的会在吗？" >}}


## 2026年2月1日（Sii-Day 1）
> #### ✅ Todo
> - [ ] 确认项目列表，准备数据、代码和训练资源
> - [ ] 完成Ai-Store情感分析的TS代码
> - [ ] 修改GAN-for-thin-film的代码，重跑，画图
> - [ ] 列好年终总结的框架

{{< quote-center >}}
晚安，布里昂。顺便说一句，明晚我们将要睡到卢森堡宫去啦！
{{< /quote-center >}}

> #### ✅ Done
> - [ ] 确认项目列表，准备数据、代码和训练资源
> - [x] 完成Ai-Store情感分析的TS代码
> - [ ] 修改GAN-for-thin-film的代码，重跑，画图
> - [ ] 列好年终总结的框架

{{< notice warning >}}
规则怪谈：不要听信AI做git合并，否则会变得不幸。
{{< /notice >}}

只能说，想得很多，能做完的很少，但是还是加班到了三点，也还行，至少没有过于摸鱼，只是被git分支合并折磨了三个多小时，还有sb的codex，一直用端口转发糊弄我，我都想明白了，还在骗我，最后发现是config读取配置有问题，无敌啦。没事哒没事哒，下次不合并啦，下次不信端口转发啦。

好在今天总算是大概看得懂那一堆代码在写什么了，也是第一次为这么大的一个项目提交了自己的代码，也不知道明天会不会因为屎山代码被喷，没事哒没事哒，我是勇敢的小羊。

今天顺带梳理了到复旦以来所有写过的科研项目代码，发现特别混乱，属于是这一坨，那一坨，方法上也是东试试，西试试，其实也反映了我内心特别混乱的状态吧，混乱的代码管理，也反映着我其实并没有在做自己真正追求的事情，也不是一一步一个脚印的去做，emmm，希望未来一个月，可以有所改观吧，代码管理是这样，精神状态管理也应该这样。

{{< figure src="/images/oneday/brave_sheep.jpg" align="center" caption="勇敢OneDay，不怕困难" >}}

{{< figure src="/images/oneday/sii_night.jpg" align="center" caption="相比于湾谷大楼的凌晨，我更喜欢创智大楼的凌晨" >}}






## 2026年1月31日
从周三开始到今天打了三天游戏，更多的感受是像脱敏治疗，一贯的原则是，既然想打，那就一口气打到不想打为止。今天又看了很多关于上岸软微的帖子，每一次看都是深深地震撼。千言万语如鲠在喉，最后可能也只会说一句：
{{< quote-center >}}
谁终将声震人间，必长久深自缄默；
谁终将点燃闪电，必长久如云漂泊。
{{< /quote-center >}}

{{< figure src="/images/oneday/pku.jpg" align="center" caption="软微圣经" >}}

## 2026年1月30日
半夜读到了一篇知乎帖子，睡不着冒雨跑来工位上码字，帖子原文见 [AI科研一年的碎碎念 - 林正的文章 - 知乎](https://zhuanlan.zhihu.com/p/1895895464450184083)。 其实我一直对于自己想要走的路持悲观态度，倒不是因为非常难，而是因为我太想要去走这条路，过于强烈的欲望必然导致对于落空的极度恐惧，我很想逃离当前的处境，Sii可能是我唯一的出路，但是我已经在脑子里假设了因为无数种原因最后失去这个救命稻草。看到有着类似境遇的博主最后成功走出了属于自己的路，除了激动外，很多的还是反思，我的路究竟在哪里呢？我也不知道什么时候我可以不用向别人寻求出路，而是向自己寻求方向。

事实证明，很久没有码字了，水平烂了不少，实际上写这个还有一个原因，因为今天打了一天的游戏，但是我没跟小敏说hhhh，说给她看博客，但是实际上现在才堪堪下笔hhhh（附上照片赔罪）。其实没有那么喜欢打游戏，只是不用去想很多我改变不了的事情，感觉就像一种精神上的放空，人际关系上的"失踪"一样，emmm，也希望后面我可以不用这种"两耳不闻窗外事"的方式来逃避很多事情。

晚上还把自动推送新博客的邮件功能做好了，因为之前接触过的邮箱的SMTP，所以也算是比较快了，但是GitHub Actions还是第一次听说。

也不知道到这个系列能不能写下去，我希望可以一直写下去，至少在我还没有彻底失去转向的希望前。

{{< figure src="/images/oneday/champion.jpg" align="center" caption="戴champion帽，举champion杯" >}}
{{< figure src="/images/oneday/oneday_love_1.jpg" align="center" caption="小敏不要生气啦，要开心呀" >}}

