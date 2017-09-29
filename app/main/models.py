from django.db import models
from django.conf import settings
from django.contrib.auth.models import AbstractUser

class RootUser(AbstractUser):
    profile_photo = models.ImageField(upload_to="profile")
    description = models.TextField()
    resume = models.FileField(upload_to="resume", default="resume/resume.pdf")

    def update_photo(self, image):
        self.profile_photo = image

    def update_description(self, description):
        self.description = description

    def update_resume(self, resume):
        self.resume = resume



class Technologies(models.Model):
    EXPERTISE = (
        (0, 'Proficient'),
        (1, 'Mediocre'),
        (2, 'Beginner'),
    )
    category = models.CharField(max_length=250)
    expertise = models.PositiveSmallIntegerField(choices=EXPERTISE)
    particular = models.CharField(max_length=250)


class WorkHistory(models.Model):
    company = models.CharField(max_length=250)
    company_website = models.CharField(max_length=250)
    at_company_from = models.DateField(null=True)
    at_company_till = models.DateField(null=True, blank=True)
    present = models.BooleanField(default=False)
    role = models.CharField(max_length=250)
    description = models.TextField()


class Education(models.Model):
    school_name = models.CharField(max_length=250)
    school_location = models.CharField(max_length=250)
    at_school_from = models.DateField(null=True)
    at_school_till = models.DateField(null=True, blank=True)
    present = models.BooleanField(default=False)
    stream = models.CharField(max_length=250)
    description = models.TextField(null=True, blank=True)


class Project(models.Model):
    name = models.CharField(max_length=250)
    description = models.CharField(max_length=250)
    github_link = models.CharField(max_length=300, null=True, blank=True)


class Photo(models.Model):
    image = models.ImageField(upload_to="photos")
    comment = models.CharField(max_length=500)
    tag = models.CharField(max_length=25)


