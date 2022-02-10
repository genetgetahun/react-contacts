import styled from "styled-components";

export const CardImage = styled.img`
  border-radius: 100%;
  width: 100px;
`;

export const Button = styled.button`
  border-radius: 50%;
  background-color: #c4c4c4;
  padding: 3px;
  border: none;
  margin-top: 30px;
  color: white;
 
`;
export const Input = styled.input`
	border: 0;
	background-color: #ddd;
	margin-bottom: 10px;
	outline: none;
	border-bottom: 1px solid gray;
	padding-left: 25px;
	font-size: 1rem;
	&::placeholder {
		color: gray;
	}
`;
  
export const Form = styled.div`
width: 60%;
border: solid 1px black;
background-color: #ddd;
margin-bottom: 200px;
padding: 50px;
display: flex;
justify-content: space-around;
`;

export const AvatarImage = styled.img`
border-radius: 100%;
width: 100px;
`;
export const Button1 = styled.button`
	cursor: pointer;
	background-color: #c4c4c4;
	font-size: 1rem;
	text-transform: uppercase;
	padding: 10px;
	border: 0;
	box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.14),
		0 2px 1px -1px rgba(0, 0, 0, 0.12), 0 1px 3px 0 rgba(0, 0, 0, 0.2);
`;