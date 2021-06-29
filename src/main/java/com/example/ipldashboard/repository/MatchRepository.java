package com.example.ipldashboard.repository;

import java.time.LocalDate;
import java.util.List;

import com.example.ipldashboard.model.Match;

import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

public interface MatchRepository extends CrudRepository<Match, Long> {
    
    List<Match> getByTeam1OrTeam2OrderByDateDesc(String teamname1, String teamname2, Pageable page);

    @Query("select m from Match m where (m.team1 = :teamName or m.team2 = :teamName) and m.date Between :startDate and :endDate Order By Date Desc")
    List<Match> getMatchesByTeamInTheYear(
        @Param("teamName") String teamName,
        @Param("startDate") LocalDate startDate,
        @Param("endDate") LocalDate endDate
    );

    // List<Match> getByTeam1AndDateBetweenOrTeam2AndDateBetweenOrderByDateDesc(
    //     String teamname1, LocalDate date1, LocalDate date2,
    //     String teamname2, LocalDate date3, LocalDate date4);

    default List<Match> findLatestMatchesByTeam(String teamName, int count) {
        return getByTeam1OrTeam2OrderByDateDesc(teamName, teamName, PageRequest.of(0, count));
    }
}
