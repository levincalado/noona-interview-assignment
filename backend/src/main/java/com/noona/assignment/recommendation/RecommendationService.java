package com.noona.assignment.recommendation;

import com.noona.assignment.symptom.Symptom;

public interface RecommendationService {
    Recommendation getRecommendation(Symptom symptom);
}
