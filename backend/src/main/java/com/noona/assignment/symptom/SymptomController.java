package com.noona.assignment.symptom;

import com.noona.assignment.recommendation.Recommendation;
import com.noona.assignment.recommendation.RecommendationService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.ArrayList;
import java.util.List;

@RestController
public class SymptomController {

    private static final Logger log = LoggerFactory.getLogger(SymptomController.class);

    List<Symptom> symptoms = new ArrayList<>();

    @Autowired
    private RecommendationService recommendationService;

    @RequestMapping(value = "/symptom", method = RequestMethod.GET)
    public List<Symptom> getSymptoms() {
        log.info("GET operation");

        return this.symptoms;
    }

    @RequestMapping(value = "/symptom", method = RequestMethod.POST)
    public Recommendation postSymptoms(@Valid @RequestBody Symptom data) {
        log.info("POST operation", data.toString());
        this.symptoms.add(data);

        return recommendationService.getRecommendation(data);
    }

    @RequestMapping(value = "/symptom/{id}", method = RequestMethod.DELETE)
    public void deleteSymptoms(@PathVariable String id) {
        log.info("DELETE operation", id);

        this.symptoms.removeIf(symptom -> symptom.getId().toString().equals(id));

        for (Symptom symptom: this.symptoms) {
            log.info(symptom.toString());
        }
    }
}
