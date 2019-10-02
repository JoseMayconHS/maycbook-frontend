import styled from 'styled-components'

export const Container = styled.article`
	border: 2px solid #4448;
	margin: 10px 5px;
	padding: 5px;
	border-radius: 8px;
	width: 99%;
	max-width: 750px;
	background: white;
  box-shadow: 0px 0px 16px 4px #9d9ece;
	
	align-items: center;
	position: relative;
`

export const Header = styled.header`
	display: flex;
	justify-content: space-between;
	padding-bottom: 5px;
	margin-bottom: 5px;
	border-bottom: 1px solid #4443;
`

export const Author = styled.div`
	width: 100%;
	display: flex;
	align-items: center;

	> img {
		width: 70px;
		border-radius: 10px;
		margin-right: 10px;
	}

	> span {
		font-weight: bolder;
		font-size: 19px;
	}
`

export const DateArea = styled.div`
	text-align: center;
  min-width: 230px;
  font-size: 13px;
`

export const Picture = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
`

export const Legend = styled.footer`
	text-align: center;
`

export const Img = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;

	> img {
		min-width: 55%;
		max-width: 90%;
		border-radius: 5px;
	}

`

export const Footer = styled.footer`
	display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 5px;
  margin-top: 5px;
  border-top: 1px solid #4443;
`

export const Actions = styled.div`
	padding: 4px;
	width: 100%;

	display: flex;
	justify-content: space-between;

	> button {
		margin: 0 5px;
		padding: 8px;
		border-radius: 4px;
		text-transform: uppercase;
	}
`

export const LikeButton = styled.button`
	flex: 1;
	background: linear-gradient(70deg,#23c828,#4f4d4d);
	transition: background .7s ease-out;

	:hover {
		background: #23c828;
	}
`

export const CommentButton = styled.button`
	flex: 1;
	background: linear-gradient(70deg,#4f4d4d, #237dc8);
	transition: background .7s ease-out;

	:hover {
		background: #237dc8;		
	}
`

export const CommentsArea = styled.div`
	transition: all .5s ease-in;
	border: 1px solid black;
	width: 100%;
	transform: scaleY(${({ opened }) => opened ? '1' : '0'});
	${({ opened }) => opened ? `
		max-height: 400px;
		overflow-y: scroll;
	` : `
		height: 0px;
		overflow: hidden;
	`}
`
