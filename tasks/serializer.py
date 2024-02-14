from rest_framework import serializers
from .models import Task

class TaskSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Task
        #serializamos TODOS los campos de el modelo o tabla task
        fields = '__all__'

