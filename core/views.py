from django.shortcuts import render

def inicio(request):
    return render(request, 'index.html')

def inicio2(request):
    return render(request, 'index2.html')