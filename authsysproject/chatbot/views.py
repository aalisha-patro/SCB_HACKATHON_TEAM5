from django.shortcuts import render, redirect
from flask import request, jsonify
from .chat import get_response
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.decorators import api_view

# Create your views here.

@api_view(["POST"])
def predict(self,request):
    text = request.get_json().get("message")
    response = get_response(text)
    message = {"answer": response}
    return jsonify(message)

