import { Inter } from '@next/font/google';
import mustache from 'assets/svg/mustache.svg';
import Image from 'next/image';
import styled from 'styled-components';

const inter = Inter({
	weight: ['300', '700'],
});

const HeaderStyle = styled.header`
	height: calc(100vh - 6rem);
	flex: 0 0 400px;
	text-align: end;
	padding-right: 3rem;
	border-right: 1px solid #d6d6d6;
	color: #333333;
	section {
		height: 100px;
		display: flex;
		align-items: center;
		justify-content: flex-end;
		gap: 1rem;
		border-bottom: 1px dotted #ea1889;
	}
	p {
		font-style: italic;
		color: #737373;
	}
	nav {
		margin-top: 2rem;
		text-align: left;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		align-items: flex-end;
		li {
			list-style: none;
			font-size: 20px;
			display: flex;
		}
	}
`;

export default function Header() {
	return (
		<HeaderStyle className={inter.className}>
			<h3>A clean programmer is the best kind of programmer</h3>
			<section>
				<p className={inter.className}>a book by Gentleman programming</p>
				<Image width={42} height={42} src={mustache} alt='logo' />
			</section>
			<nav className={inter.className}>
				<li>Chapter 1</li>
				<li>Chapter 2</li>
				<li>Chapter 3</li>
				<li>Chapter 4</li>
				<li>Chapter 5</li>
				<li>Chapter 6</li>
			</nav>
		</HeaderStyle>
	);
}

