function itijikyouki() {
	var kyouki = ['気絶あるいは金切り声の発作', 'パニック状態で逃げ出す', '肉体的なヒステリーあるいは感情の噴出(大笑い、大泣きなど)', 
	'早口でぶつぶつ言う意味不明の会話あるいは多弁症(一貫した会話の奔流)', '探索者をその場に釘づけにしてしまうかもしれないような極度の恐怖症', 
	'殺人癖あるいは自殺癖', '幻覚あるいは妄想', '反響動作あるいは反響言語(探索者は周りの者の動作あるいは発言を反復する)',
	'奇妙なもの、異様なものを食べたがる(泥、粘着物、人肉など)',
	'昏迷(胎児のような姿勢をとる、物事を忘れる)あるいは緊張症(特定の状況での過緊張)'];
	var i;
	i =  Math.floor(Math.random() * kyouki.length);

	var put_kyouki = document.getElementById("itiji");
	put_kyouki.innerHTML = i + kyouki[i];
}
function futeikyouki() {
	var kyouki = ['健忘症(親しい者のことを最初に忘れる。言語や肉体的な技能は働くが、知的な技能は働かない)あるいは昏迷/緊張症',
	 '激しい恐怖症(逃げ出すことはできるが、恐怖の対象はどこへ行っても見える)', '幻覚', 
	'奇妙な性的嗜好(露出症、過剰性欲、奇形愛好症など)', 'フェティッシュ(探索者はある物、ある種類の物、人物に対し異常なまでに執着する)', 
	'制御不能のチック、震え、あるいは会話や文章で人と交流することができなくなる', '心因性視覚障害、心因性難聴、単数あるいは複数の四肢の機能障害', '短期的の心因反応(支離滅裂、妄想、常軌を逸した振る舞い、幻覚など)',
	'一時的偏執症',
	'強迫観念に取り付かれた行動'];
	var i;
	i =  Math.floor(Math.random() * kyouki.length);

	var put_kyouki = document.getElementById("futei");
	put_kyouki.innerHTML = i + kyouki[i];
}

function taikou() {

	var a;
	var b;
	var work;
	var suc;
	var i;
	var result;

	a = document.getElementById("active").value;
	b = document.getElementById("passive").value; 
	work = a - b;

	suc = 50;
	suc = suc + work * 5

	var put_suc = document.getElementById("percent");
	put_suc.innerHTML = '能動側成功値 ' + suc ;

	i = Math.floor(Math.random() * 100) + 1;

	var dice_result = document.getElementById("kekka");
	dice_result.innerHTML = i;

	if (suc >= i) {
		result = '能動側の成功';
	}else {
		result = '受動側の成功';
	}

	var put_result = document.getElementById("taikou");
	put_result.innerHTML = result;
}