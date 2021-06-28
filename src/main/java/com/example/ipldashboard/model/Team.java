package com.example.ipldashboard.model;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Transient;


@Entity
public class Team {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private String teamName;
    private long teamMataches;
    private long teamWins;
    
    @Transient
    private List<Match> matches;
    
    public long getId() {
        return id;
    }
    public void setId(long id) {
        this.id = id;
    }
    public String getTeamName() {
        return teamName;
    }
    public void setTeamName(String teamName) {
        this.teamName = teamName;
    }
    public long getTeamMataches() {
        return teamMataches;
    }
    public void setTeamMataches(long teamMataches) {
        this.teamMataches = teamMataches;
    }
    public long getTeamWins() {
        return teamWins;
    }
    public void setTeamWins(long teamWins) {
        this.teamWins = teamWins;
    }

    public Team(String teamName, long teamMataches) {
        this.teamName = teamName;
        this.teamMataches = teamMataches;
    }

    @Override
    public String toString() {
        return "Team [id=" + id + ", teamMataches=" + teamMataches + ", teamName=" + teamName + ", teamWins=" + teamWins
                + "]";
    }

    public List<Match> getMatches() {
        return matches;
    }
    public void setMatches(List<Match> matches) {
        this.matches = matches;
    }

    public Team() {}    
}
