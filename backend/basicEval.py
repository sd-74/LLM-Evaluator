import promptbench as pb
from tqdm import tqdm

def dataLoader(dataset):
    return pb.DatasetLoader.load_dataset(dataset)

def modelLoader(model):
        return pb.LLMModel(model, max_new_tokens=20, temperature=0.001, device="cpu")

def evalFunc(model, dataset, prompt):
    # for prompt in prompts:
    preds = []
    labels = []
    for data in tqdm(dataset):
        # process input
        input_text = pb.InputProcess.basic_format(prompt, data)
        label = data['label']
        raw_pred = model(input_text)
        # process output
        pred = pb.OutputProcess.cls(raw_pred)
        preds.append(pred)
        labels.append(label)
    
    # evaluate
    score = pb.Eval.compute_cls_accuracy(preds, labels)
    print(f"{score:.3f}, {prompt}")
    return (score)
