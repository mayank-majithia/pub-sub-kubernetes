// src/Message.js
import React, { useState, useEffect } from 'react';
import { fetchMessages } from './api';

const Message = () => {
	const [messages, setMessages] = useState([]);

	useEffect(() => {
		const getMessages = async () => {
			try {
				const data = await fetchMessages();

				const sortedMessages = data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

				setMessages(sortedMessages);
			} catch (error) {
				console.log(error.message);
			}
		};

		getMessages();
	}, []);

	return (
		<div>
			<h1>Messages</h1>
			<ul>
				{(messages || []).map((message) => (
					<li key={message.id}>
						<p>{message.message}</p>
						<p>{new Date(message.created_at).toLocaleString()}</p>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Message;
