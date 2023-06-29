from django.contrib import admin
from place.models import Doas


class DoasAdmin(admin.ModelAdmin):
    list_display = ('id','nome','cpf','num','desc','img')
    list_display_links = ('id','nome','cpf','num','desc','img')
    search_fields = ('id','nome','cpf','num','desc','img')

admin.site.register(Doas, DoasAdmin)