from unicodedata import name
from django.urls import path
from . import views
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path('', views.index, name="index"),
    path('about/', views.about, name="about"),
    path('skills/', views.skills, name="skills"),
    path('contact/', views.contact, name="contact"),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)