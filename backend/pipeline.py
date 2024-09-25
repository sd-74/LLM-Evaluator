#!/usr/bin/env python
# coding: utf-8

# In[10]:


# get_ipython().run_line_magic('pip', 'install textattack')


# In[29]:


# import nltk
# nltk.download('stopwords')


# In[27]:


import promptbench as pb
from promptbench.models import LLMModel
from promptbench.prompt_attack import Attack


# In[28]:


import torch
print(torch.__version__)
print(torch.cuda.is_available())


# In[22]:


model_t5 = LLMModel(model='google/flan-t5-large', device = 'cpu', temperature=0.7, do_sample=True)


# create dataset
dataset = pb.DatasetLoader.load_dataset("sst2")

# try part of the dataset
dataset = dataset[:10]
# print(dataset)
# input()

# create prompt
prompt = "As a sentiment classifier, determine whether the following text is '0' or '1'. Please classify: \nQuestion: {content}\nAnswer:"

# define the projection function required by the output process
# def proj_func(pred):
#     mapping = {
#         "positive": 1,
#         "negative": 0
#     }
#     return mapping.get(pred, -1)

# define the evaluation function required by the attack
# if the prompt does not require any dataset, for example, "write a poem", you still need to include the dataset parameter
def eval_func(prompt, dataset, model):
    preds = []
    labels = []
    for d in dataset:
        input_text = pb.InputProcess.basic_format(prompt, d)
        raw_output = model(input_text)

        # output = pb.OutputProcess.cls(raw_output, proj_func)
        output = pb.OutputProcess.cls(raw_output)
        preds.append(output)

        labels.append(d["label"])
    
    return pb.Eval.compute_cls_accuracy(preds, labels)
    
# define the unmodifiable words in the prompt
# for example, the labels "positive" and "negative" are unmodifiable, and "content" is modifiable because it is a placeholder
# if your labels are enclosed with '', you need to add \' to the unmodifiable words (due to one feature of textattack)
unmodifiable_words = ["0\'", "1\'", "content"]
# unmodifiable_words = []

# print all supported attacks
# print(Attack.attack_list())


# In[23]:


attack = Attack(model_t5, "stresstest", dataset, prompt, eval_func, unmodifiable_words, verbose=True)

# print attack result
print(attack)
print(attack.attack()['attacked score'])




# In[ ]:




