package com.productmanagement.model;

public class JwtRequest {
	String userName;
	String Password;

	public JwtRequest() {}

	public String getUserName() {
		return this.userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getPassword() {
		return Password;
	}

	public void setPassword(String password) {
		Password = password;
	}

	public JwtRequest(String userName, String password) {
		super();
		this.userName = userName;
		Password = password;
	}

	@Override
	public String toString() {
		return "JwtRequest [userName=" + userName + ", Password=" + Password + "]";
	}

	
}
