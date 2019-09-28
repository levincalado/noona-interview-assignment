package com.noona.assignment.recommendation;

import com.noona.assignment.symptom.Symptom;
import org.springframework.stereotype.Service;

@Service
public class RecommendationServiceImpl implements RecommendationService {

    @Override
    public Recommendation getRecommendation(Symptom symptom) {
        int intensity = symptom.getIntensity();

        Recommendation recommendation = new Recommendation();

        // default
        String message = "We recommend you to take a rest.";
        boolean alert = false;

        if (intensity > 8) {
            // severe
            message = "Symptoms are severe. Please consult a doctor immediately.";
            alert = true;
        } else if (intensity > 4) {
            // painkillers
            message = "We suggest you to take a painkiller.";
            alert = false;
        }

        recommendation.setMessage(message);
        recommendation.setAlert(alert);

        return recommendation;
    }
}
