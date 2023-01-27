from django.shortcuts import render
from django.views.generic import View
import json
from django.http import JsonResponse
from django.contrib.auth.models import User


# Create your views here.
class UsernameValidationView(View):
    def post(self, request):
        data = json.loads(request.body)
        username = data['username']
        if not str(username).isalnum():
            return JsonResponse({'usernameError': 'Username should only contain alphanumeric characters'}, status=400)
        if User.objects.filter(username=username).exists():
            return JsonResponse({'usernameError': 'Sorry, username is already in use. Choose another one'}, status=409)

        return JsonResponse({'username_valid': True})


class Register(View):
    def get(self, request):
        return render(request, 'accounts/register.html')
