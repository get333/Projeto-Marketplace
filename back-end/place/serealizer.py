from rest_framework import serializers
from place.models import Doas

class DoasSerializer(serializers.ModelSerializer):
    class Meta:
        model = Doas
        fields = ('id','nome','cpf','num','desc','img')