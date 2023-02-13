import { Inter } from "@next/font/google";
import styles from "./SignUp.module.css";

const inter = Inter({
	variable: "--inter-font",
	subsets: ["latin"],
});

export default function SignUpPage() {
	return (
		<main className={inter.variable}>
			<div className={styles.blockWithoutNav}>
				<div className={styles.loginBox}>
					<p className={styles.loginText}>회원가입</p>
					<form className={styles.formBox}>
						<input
							type="email"
							placeholder="아이디를 입력해주세요"
							className={styles.inputBox}
						/>
						<input
							type="password"
							placeholder="비밀번호를 입력해주세요"
							className={styles.inputBox}
						/>
						<input
							type="submit"
							value="완료"
							className={styles.submitButton}
						/>
					</form>
					<div className={styles.otherServiceBox}>
						<div className={styles.serviceTextBox}>
							<p className={styles.questionText}>
								계정이 없으신가요?
							</p>
							<p className={styles.buttonText}>
								회원가입 하러가기
							</p>
						</div>
						<div className={styles.serviceTextBox}>
							<p className={styles.questionText}>
								비밀번호를 잊으셨나요?
							</p>
							<p className={styles.buttonText}>비밀번호 찾기</p>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
