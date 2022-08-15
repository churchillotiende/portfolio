import styled from 'styled-components';

export const MessageElement =styled.p`
	width:fit-content;
	padding:10px;
	border-radius:8px;
	margin:10px;
	 min-width:100px;
	 min-height:30px;
	padding-bottom:25px;
	position:relative;
	text-align:right;
	font-size:15px;
`;

export const Sender = styled(MessageElement)`
  margin-left:auto;
  text-align:left;
  background-color:#075E54;
`;

export const Receiver = styled(MessageElement)`
 text-align:left;
  background-color:#212D45;
`;

export const Timestamp = styled.span`
	padding:10px;
	font-size:9px;
	position:absolute;
	bottom:0;
	text-align:right;
	right:0;
`