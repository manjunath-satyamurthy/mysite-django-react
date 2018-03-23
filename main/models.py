from django.db import models
from django.conf import settings
from django.contrib.auth.models import AbstractUser
import os

class RootUser(AbstractUser):
    profile_photo = models.ImageField(upload_to="profile")
    profile_photo_url = models.CharField(max_length=250, null=True, blank=True)
    description = models.TextField()
    resume = models.FileField(upload_to="resume", default="resume/resume.pdf")
    resume_url = models.CharField(max_length=250, null=True, blank=True)

    __old_profile_photo = None
    __old_resume = None

    def __init__(self, *args, **kwargs):
        super(RootUser, self).__init__(*args, **kwargs)
        self.__old_profile_photo = self.profile_photo
        self.__old_resume = self.resume


    def update_photo(self, image):
        self.profile_photo = image

    def update_description(self, description):
        self.description = description

    def update_resume(self, resume):
        self.resume = resume

    def save(self, *args, **kwargs):
        super(RootUser, self).save(*args, **kwargs)
        if self.__old_profile_photo != self.profile_photo.url:
            if settings.IS_PRODUCTION:
                import cloudinary
                cloudinary_url = cloudinary.uploader.upload(self.profile_photo)
                self.profile_photo_url = cloudinary_url['url']
            else:
                self.profile_photo_url = self.profile_photo.url

            super(RootUser, self).save(*args, **kwargs)

        if self.__old_resume != self.resume:
            if settings.IS_PRODUCTION:
                import cloudinary
                cloudinary_url = cloudinary.uploader.upload(self.resume)
                self.resume_url = cloudinary_url['url']
            else:
                self.resume_url = self.resume.url

            super(RootUser, self).save(*args, **kwargs)




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
    image_url = models.CharField(max_length=250, null=True, blank=True)
    comment = models.CharField(max_length=500)
    tag = models.CharField(max_length=25)

    __old_image = None

    def __init__(self, *args, **kwargs):
        super(Photo, self).__init__(*args, **kwargs)
        self.__old_image = self.image

    def save(self, *args, **kwargs):
        super(Photo, self).save(*args, **kwargs)
        if self.__old_image != self.image:
            if os.environ.get("IS_PRODUCTION"):
                import cloudinary
                cloudinary_url = cloudinary.uploader.upload(self.image)
                self.image_url = cloudinary_url['url']
            else:
                self.image_url = self.image.url

            super(Photo, self).save(*args, **kwargs)