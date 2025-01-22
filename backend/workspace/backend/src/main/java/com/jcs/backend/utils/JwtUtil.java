package com.jcs.backend.utils;

import java.security.Key;
import java.util.Date;

import io.jsonwebtoken.security.Keys;
import jakarta.servlet.http.HttpServletRequest;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

public class JwtUtil {
	private final Key SECRET_KEY = Keys.hmacShaKeyFor("나의 시크릿 키".getBytes()); //HMAC-SHA algorithms 
	
	public String generateToken(String username) {
		return Jwts.builder()
				.setSubject(username)
				.setIssuedAt(new Date())
				.setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 30))
				.signWith(SECRET_KEY, SignatureAlgorithm.HS256)
				.compact();
	}
	
	public String extractUsername(HttpServletRequest request) {
		//jakarta 이건 뭐지 
		String token = request.getHeader("Authorization");
		
		if(token != null && token.startsWith("Bearer ")) {
			token = token.substring(7);
		}
		
		//thread-safe
		return Jwts.parserBuilder()
				.setSigningKey(SECRET_KEY)
				.build()
				.parseClaimsJws(token)
				.getBody()
				.getSubject();
	}
}
