from django.contrib import admin
from main.models import Technologies, WorkHistory, Education, Project, \
	Photo, RootUser


class ProjectAdmin(admin.ModelAdmin):
	list_display = ('name', 'description', 'github_link')

admin.site.register(RootUser)
admin.site.register(Technologies)
admin.site.register(WorkHistory)
admin.site.register(Education)
admin.site.register(Photo)
admin.site.register(Project, ProjectAdmin)