package com.productmanagement.model;

public class JwtResponse {
	public String getToken() {
		return token;
	}

	public JwtResponse(String token) {
		this.token = token;
	}

	public void setToken(String token) {
		this.token = token;
	}

	String token;

}
