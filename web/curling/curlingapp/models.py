from django.db import models
from django.forms import ModelForm
from django.db.models import JSONField
import json


class Match(models.Model):
    matchName = models.CharField("Match",max_length=120)
    camId = models.IntegerField("Sheet")
    redTeam = models.CharField("Red Team",max_length=120,default="Red")
    yellowTeam = models.CharField("Yellow Team",max_length=120,default="Yellow")

class MatchForm(ModelForm):
    class Meta:
        model = Match
        fields = ['matchName','camId','redTeam','yellowTeam']

class Round(models.Model):
    pos = JSONField()
    timestamp = models.DateTimeField(auto_now_add=True)
    end = models.IntegerField()
    throw = models.IntegerField()
    match = models.ForeignKey(Match,on_delete=models.CASCADE)

    def get_pos(self):
        return json.dumps(self.pos) 

    def get_match(self):
        return self.match.match

class Scoreboard(models.Model):
    winner = models.CharField(max_length=1)
    end = models.IntegerField()
    points = models.IntegerField()
    match = models.ForeignKey(Match,on_delete=models.CASCADE)

    def get_score(self):
        return self.end, self.winner, self.points






    