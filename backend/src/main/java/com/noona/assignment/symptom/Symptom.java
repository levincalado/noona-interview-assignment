package com.noona.assignment.symptom;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.util.Date;
import java.util.Objects;
import java.util.UUID;

public class Symptom {
    private UUID id;

    @NotEmpty(message = "description cannot be null")
    private String description;

    private Integer intensity;

    @NotNull(message = "dateObserved cannot be null")
    private Date dateObserved;

    private Date createdDate;

    public Symptom() {
        this.id = UUID.randomUUID();
        this.createdDate = new Date();
    }

    public UUID getId() {
        return id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Integer getIntensity() {
        return intensity;
    }

    public void setIntensity(Integer intensity) {
        this.intensity = intensity;
    }

    public Date getDateObserved() {
        return dateObserved;
    }

    public void setDateObserved(Date dateObserved) {
        this.dateObserved = dateObserved;
    }

    public Date getCreatedDate() {
        return createdDate;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Symptom symptom = (Symptom) o;
        return id.equals(symptom.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }

    @Override
    public String toString() {
        return "Symptom{" +
                "id=" + id +
                ", description='" + description + '\'' +
                ", intensity=" + intensity +
                ", dateObserved=" + dateObserved +
                ", createdDate=" + createdDate +
                '}';
    }
}
