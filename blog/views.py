from django.shortcuts import render
from django.utils import timezone
from .models import Post

def index2(request):
	posts = Post.objects.filter(fecha_publicado__lte=timezone.now()).order_by('-fecha_publicado')
	return render(request, 'blog/index2.html',  {'posts': posts})