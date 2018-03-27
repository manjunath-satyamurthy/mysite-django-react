"""
Django settings for app project.

Generated by 'django-admin startproject' using Django 1.11.3.

For more information on this file, see
https://docs.djangoproject.com/en/1.11/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/1.11/ref/settings/
"""

import os

# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/1.11/howto/deployment/checklist/


IS_PRODUCTION = False
if os.environ.get('IS_PRODUCTION'):
    IS_PRODUCTION = True


# SECURITY WARNING: keep the secret key used in production secret!
if IS_PRODUCTION:
    SECRET_KEY = os.environ.get('DJANGO_SECRET_KEY')
else:
    SECRET_KEY = 'r^q25239iwv1(2s6=_hkr1is-a93yg3*5db7-*5612zs#^@vsb'


if IS_PRODUCTION:
    ALLOWED_HOSTS = ["mysite-django-react.herokuapp.com", "manjunathsatyamurthy.com", "www.manjunathsatyamurthy.com"]
    if IS_DEBUG_TRUE:
        DEBUG=True
else:
    ALLOWED_HOSTS = ["192.168.0.59", "127.0.0.1", "localhost"]
    DEBUG = True

# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.staticfiles',
    'main.apps.MainConfig',
    'anotherapp.apps.AnotherappConfig',
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    'whitenoise.middleware.WhiteNoiseMiddleware',
]

ROOT_URLCONF = 'app.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'app.wsgi.application'


# Database
# https://docs.djangoproject.com/en/1.11/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'mysite',
        'USER': 'manju',
        'PASSWORD': '1234',
        'HOST': 'localhost'
    }
}
if IS_PRODUCTION:
    DATABASE_URL = os.environ.get('CLEARDB_DATABASE_URL')
    d = DATABASE_URL.split('@')
    user , password = d[0].split('mysql://')[1].split(':')
    host, name = d[1].split('/')
    name = name.split('?')[0]

    DATABASES["default"]["USER"] = user
    DATABASES["default"]["PASSWORD"] = password
    DATABASES["default"]["HOST"] = host
    DATABASES["default"]["NAME"] = name


# Password validation
# https://docs.djangoproject.com/en/1.11/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]

AUTH_USER_MODEL = 'main.RootUser'

ROOT_USER = 'manju'

# Internationalization
# https://docs.djangoproject.com/en/1.11/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_L10N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/1.11/howto/static-files/
STATIC_URL = '/static/'
STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')
STATICFILES_DIRS = (
    os.path.join(BASE_DIR, 'static'),
)


MEDIA_URL = '/media/'
MEDIA_ROOT = BASE_DIR + "/media/"


if IS_PRODUCTION:
    import cloudinary
    import cloudinary.uploader
    import cloudinary.api

    CLOUDINARY_URL = os.environ.get("CLOUDINARY_URL")
    part_url, cloud_name = CLOUDINARY_URL.split("@")
    api_key, api_secret = part_url.split("cloudinary://")[1].split(":")
    cloudinary.config( 
      cloud_name = cloud_name, 
      api_key = api_key, 
      api_secret = api_secret 
    )

