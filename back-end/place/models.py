from django.db import models

class Doas(models.Model):
    id = models.IntegerField(primary_key=True)
    nome = models.CharField(max_length=30, default='')
    cpf = models.IntegerField(max_length=11)
    num = models.IntegerField(max_length=13)
    desc = models.CharField(max_length=200, default='')
    img = models.ImageField(default='', upload_to='images/')

    def __str__(self):
        return self.nome