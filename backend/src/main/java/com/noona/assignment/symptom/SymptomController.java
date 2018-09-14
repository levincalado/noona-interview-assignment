package com.noona.assignment.symptom;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
public class SymptomController {

    @RequestMapping(value = "/symptom", method = RequestMethod.GET)
    public List<Symptom> symptoms() {
        final Symptom symptom = new Symptom();
        symptom.setId("symptom id");
        return Arrays.asList(symptom);
    }
}
