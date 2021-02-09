UI.AddSubTab(["Rage", "SUBTAB_MGR"], "hitmarker")
UI.AddColorPicker(["Rage", "hitmarker", "hitmarker"], "hitmarker color")
var m_pos = [];

function bullet_impact() {
	var local_player = Entity.GetLocalPlayer();
	user_id = Entity.GetEntityFromUserID(Event.GetInt("userid"));
	if (user_id != local_player) return;
	pos_final = [Event.GetFloat("x"), Event.GetFloat("y"), Event.GetFloat("z")];
	m_pos.push([pos_final, 255]);
}

function on_paint() {
	for (var i = 0; i < m_pos.length; i++) {
		var col = UI.GetColor(["Rage", "hitmarker", "hitmarker", "hitmarker color"])
		var pos_lol = Render.WorldToScreen(pos_lmao = m_pos[i][0])
		Render.FilledRect(pos_lol[0], pos_lol[1] - 4, 2, 10, [col[0], col[1], col[2], m_pos[i][1]]);
		Render.FilledRect(pos_lol[0] - 4, pos_lol[1], 10, 2, [col[0], col[1], col[2], m_pos[i][1]]);
		m_pos[i][1]--;
		if (m_pos[i][1] <= 0) {
			m_pos.shift(i, m_pos[i][1])
		}
	}
}

function round_start() {
	m_pos = [];
}


Cheat.RegisterCallback("Draw", "on_paint")
Cheat.RegisterCallback("bullet_impact", "bullet_impact");
Cheat.RegisterCallback("round_start", "round_start");