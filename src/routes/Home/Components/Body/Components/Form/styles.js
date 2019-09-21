import styled from 'styled-components'

export const Form = styled.form`
	position: relative;
	width: 100%;
	max-width: 450px;
	border: 1px solid rgba(0, 0, 0, .3);
	padding: 20px 15px;
	border-radius: 4px;
	background: rgba(255, 255, 255, .7);
`

export const Title = styled.div`
	margin: 5px 0;

	._title {
		display: block;
		font-size: 22px;
	}

	._subtitle {
		/* alguma coisa */
	}
`


export const InputArea = styled.div`
	position: relative;

	> input, select {
		width: 100%;
		margin: 4px;
		border-radius: 4px;
		display: block;

		background: rgba(255, 255, 255, .7);
	}

	> input {
		padding: 8px;
	}

	> select {
		padding: 7px;
	}

`

export const InputsGroup = styled.div`
	display: flex;
	flex-flow: row wrap;
	justify-content: space-between;
`

export const ActionArea = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 10px;

	> button {
		border-radius: 4px;

		background: rgba(0, 0, 0, .6);
		border: 1px solid white;
		color: white;
	}

	._submit-register {
		flex: 1;
		margin-right: 10px;

		transition: background .2s linear;
		:hover {
			background: rgba(0, 100, 0, .6);
		}
	}

	._already-have {
		transition: background .2s linear;
		:hover {
			background: rgba(60, 60, 60, .6);
		}
	}	

`

export const Action = styled.button`
	padding: 10px;
`