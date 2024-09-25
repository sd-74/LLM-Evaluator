from datasets import load_dataset

dataset = load_dataset("super_glue", "boolq")
print(dataset["train"][5])
