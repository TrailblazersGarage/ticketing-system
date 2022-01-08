# Ticketing System

![](/architecture-screenshot.png)

### Set up

Apply Ingress-nginx for your minikube cluster using Helm or applying a YAML manifest:

```
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.1.0/deploy/static/provider/cloud/deploy.yaml

minikube addons enable ingress

kubectl label node --all kubernetes.io/os=linux
It will update the label on all the kube nodes so the container will find the node


kubectl -n ingress-nginx get pod -o wide
get pods -n ingress-nginx

kubectl describe pod -n ingress-nginx ingress-nginx-controller-845d947699-pcvnr
```

More details and config variations (set up in a Mac instead of Linux machine): [ingress-nginx doc](https://kubernetes.github.io/ingress-nginx/deploy/#quick-start).

### Stack

- Next.js: Server-side rendering
- MERN stack: Mongo, Express,React, Node
- Jest: Testing Framework
- [Skaffold](https://skaffold.dev/): Local Kubernetes dev
