package com.noona.assignment.recommendation;

public class Recommendation {
    private String message;
    private boolean alert;

    public Recommendation() { }

    public Recommendation(String message, boolean alert) {
        this.message = message;
        this.alert = alert;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public boolean isAlert() {
        return alert;
    }

    public void setAlert(boolean alert) {
        this.alert = alert;
    }
}
