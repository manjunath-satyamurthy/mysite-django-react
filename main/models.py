import os

from django.db import models
from django.conf import settings
from django.contrib.auth.models import AbstractUser
from django.core.files.storage import Storage
from django.core.files.storage import default_storage
from django.utils.deconstruct import deconstructible


@deconstructible
class CloudinaryStorage(Storage):

    def __init__(self, compress=False):
        self.compress = compress

    def _save(self, name, content):
        if settings.IS_PRODUCTION:
            import cloudinary
            if self.compress:
                cloudinary_url = cloudinary.uploader.upload(
                    content, transformation=[{"quality":"auto:low"}]
                )
            else:
                cloudinary_url = cloudinary.uploader.upload(content)
            return cloudinary_url['secure_url']
        default_storage.save(name, content)
        return name

    def exists(self, name):
        return False

    def url(self, name):
        if settings.IS_PRODUCTION:
            return name
        return 'media/'+name


class RootUser(AbstractUser):
    profile_photo = models.ImageField(
        upload_to="profile",
        storage=CloudinaryStorage()
    )
    description = models.TextField()
    resume = models.FileField(
        upload_to="resume",
        default="resume/resume.pdf",
        storage=CloudinaryStorage()
    )

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
    image = models.ImageField(
        upload_to="photos",
        storage=CloudinaryStorage(compress=True)
    )
    comment = models.CharField(max_length=500)
    tag = models.CharField(max_length=25)
