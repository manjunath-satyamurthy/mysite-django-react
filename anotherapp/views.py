import json, time
from django.shortcuts import HttpResponse, render
from django.http import JsonResponse
from django.contrib.auth import authenticate, login, logout
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.decorators import login_required

from django.conf import settings
from main.models import RootUser, Technologies, WorkHistory, \
	Education, Project, Photo


def technologies(request):
	if request.method == 'GET':
		return render(request, 'technologies.html')


def education(request):
	if request.method == 'GET':
		return render(request, 'education.html')


def workhistory(request):
	if request.method == 'GET':
		return render(request, 'workhistory.html')

@csrf_exempt
def login_view(request):
	if request.method == 'GET':
		return render(request, 'login.html')
	if request.method == 'POST':
		post_data = json.loads(request.POST['data'])
		user = authenticate(username=post_data['username'], password=post_data['password'])
		if user:
			login(request, user)
			return JsonResponse({"username":user.username, "message": 'Logged in successfully'})
		return HttpResponse(status=401)


def photos(request):
	if request.method == 'GET':
		return render(request, 'photos.html')


def projects(request):
	if request.method == 'GET':
		return render(request, 'projects.html')


def resume(request):
	if request.method == 'GET':
		return render(request, 'resume.html')

def contactme(request):
	if request.method == 'GET':
		return render(request, 'contactme.html')


def credits(request):
	if request.method == 'GET':
		return render(request, 'credits.html')

def google(request):
	if request.method == 'GET':
		return render(request, 'google4a37ebd500121679.html')



@login_required
def test(request):
	if request.method == 'GET':
		return JsonResponse({"status":'success', "message": 'Logged in successfully'})


def logout_view(request):
	if request.method == 'GET':
		logout(request)
		return JsonResponse({"message": 'Logged out successfully'})


@csrf_exempt
@login_required
def update_homepage(request):
	if request.method == 'POST':
		description = json.loads(request.POST["data"])["description"] if request.POST else None
		photo = request.FILES["photo"] if request.FILES else None
		if photo:
			request.user.update_photo(photo)
		if description:
			request.user.update_description(description)
		if photo or description:
			request.user.save()
		return JsonResponse({"message": "Updated Successfully"})


@csrf_exempt
def get_homepage(request):
	if request.method == 'GET':
		user = RootUser.objects.get(username=settings.ROOT_USER)
		return JsonResponse({
			"profile_photo_url": user.profile_photo.url,
			"description": user.description
		})


@csrf_exempt
def get_technologies(request):
	technologies = Technologies.objects.all()
	result = {}
	for technology in technologies:
		expertise = technology.get_expertise_display()
		if technology.category not in result:
			result[technology.category] = {}
		if expertise not in result[technology.category]:
			result[technology.category][expertise] = []

		result[technology.category][expertise].append(technology.particular)
	return JsonResponse(json.dumps(result), safe=False)



@csrf_exempt
def get_work_history(request):
	result = []
	work_history = WorkHistory.objects.order_by("-at_company_from").all()
	for work in work_history:
		result.append({
			"Company": work.company,
			"Role": work.role,
			"Duration": work.at_company_from.strftime("%b %Y") + \
				' - '+ (work.at_company_till.strftime("%b %Y") if not work.present else "Present"),

			"Description": work.description,
			"URL": work.company_website,
		})

	return JsonResponse(json.dumps(result), safe=False)


@csrf_exempt
def get_education(request):
	result = []
	education = Education.objects.order_by("-at_school_from").all()
	for school in education:
		result.append({
			"school_name": school.school_name,
			"stream": school.stream,
			"duration": school.at_school_from.strftime("%b %Y") + \
				' - ' + (school.at_school_till.strftime("%b %Y") if not school.present else "Present"),
			"description": school.description,
			"location": school.school_location
		})

	return JsonResponse(json.dumps(result), safe=False)


@csrf_exempt
def get_projects(request):
	result = []
	projects = Project.objects.order_by("name").all()
	for project in projects:
		result.append({
			"name": project.name,
			"description": project.description,
			"github_link": project.github_link,
			})
	return JsonResponse(json.dumps(result), safe=False)


@csrf_exempt
def get_resume(request):
	user = RootUser.objects.get(username=settings.ROOT_USER)
	return JsonResponse({
		"url": user.resume.url
		})


@csrf_exempt
def update_resume(request):
	if request.method == 'POST':
		resume_pdf = request.FILES["resume"] if request.FILES else None
		if resume_pdf:
			request.user.update_resume(resume_pdf)
			request.user.save()

	return JsonResponse({"result": "success"})


@csrf_exempt
def get_photos(request):
	if request.method == 'GET':
		photos = Photo.objects.order_by('tag').all()
		result = []
		for photo in photos:
			result.append({
			'image_url': photo.image.url,
			'comment': photo.comment,
			'tag': photo.tag,
			})
		return JsonResponse(result, safe=False)
