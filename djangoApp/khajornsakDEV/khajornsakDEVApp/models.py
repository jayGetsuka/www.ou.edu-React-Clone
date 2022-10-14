from django.db import models

# Create your models here.

SKILLS_CHOICES = (
    ("Programming languages", "Programming languages"),
    ("Framework", "Framework"),
    ("Other", "Other"),
)
class Skill(models.Model):
    name = models.CharField(max_length=255)
    type = models.CharField(
        max_length = 255,
        choices = SKILLS_CHOICES,
        default = 'Other'
        )
    score = models.IntegerField()



