const global_choked_commands = Globals.ChokedCommands, global_realtime = Globals.Realtime, global_frametime = Globals.Frametime, global_curtime = Globals.Curtime, global_tick_interval = Globals.TickInterval, global_tickrate = Globals.Tickrate, global_tickcount = Globals.Tickcount, global_frame_stage = Globals.FrameStage, ui_get_menu_position = UI.GetMenuPosition, ui_update_list = UI.UpdateList, ui_remove_item = UI.RemoveItem, ui_get_hotkey = UI.GetHotkey, ui_set_hotkey_state = UI.SetHotkeyState, ui_get_hotkey_state = UI.GetHotkeyState, ui_toggle_hotkey = UI.ToggleHotkey, ui_set_color = UI.SetColor, ui_add_sub_tab = UI.AddSubTab, ui_add_textbox = UI.AddTextbox, ui_add_color_picker = UI.AddColorPicker, ui_add_multi_dropdown = UI.AddMultiDropdown, ui_add_dropdown = UI.AddDropdown, ui_add_hotkey = UI.AddHotkey, ui_add_slider_float = UI.AddSliderFloat, ui_add_slider_int = UI.AddSliderInt, ui_add_checkbox = UI.AddCheckbox, ui_set_value = UI.SetValue, ui_get_children = UI.GetChildren, ui_get_value = UI.GetValue, ui_get_string = UI.GetString, ui_get_color = UI.GetColor, ui_is_menu_open = UI.IsMenuOpen, ui_set_enabled = UI.SetEnabled, entity_draw_flag = Entity.DrawFlag, entity_get_ccs_weapon_info = Entity.GetCCSWeaponInfo, entity_get_render_box = Entity.GetRenderBox, entity_get_weapons = Entity.GetWeapons, entity_get_entities_by_class_id = Entity.GetEntitiesByClassID, entity_get_hitbox_position = Entity.GetHitboxPosition, entity_get_eye_position = Entity.GeteyePosition, entity_get_game_rules_proxy = Entity.GetGameRulesProxy, entity_is_bot = Entity.IsBot, entity_get_weapon = Entity.GetWeapon, entity_set_prop = Entity.SetProp, entity_get_prop = Entity.GetProp, entity_get_render_origin = Entity.GetRenderOrigin, entity_get_name = Entity.GetName, entity_get_class_name = Entity.GetClassName, entity_get_class_id = Entity.GetClassID, entity_is_dormant = Entity.IsDormant, entity_is_alive = Entity.IsAlive, entity_is_valid = Entity.IsValid, entity_is_local_player = Entity.IsLocalPlayer, entity_is_enemy = Entity.IsEnemy, entity_is_teammate = Entity.IsTeammate, entity_get_entity_from_user_id = Entity.GetEntityFromUserID, entity_get_local_player = Entity.GetLocalPlayer, entity_get_teammates = Entity.GetTeammates, entity_get_enemies = Entity.GetEnemies, entity_get_players = Entity.GetPlayers, entity_get_entities = Entity.GetEntities, render_text_size = Render.TextSize, render_string = Render.String, render_filled_circle = Render.FilledCircle, render_textured_rect = Render.TexturedRect, render_add_texture = Render.AddTexture, render_find_font = Render.FindFont, render_get_font = Render.GetFont, render_polygon = Render.Polygon, render_gradient_rect = Render.GradientRect, render_get_screen_size = Render.GetScreenSize, render_world_to_screen = Render.WorldToScreen, render_circle = Render.Circle, render_filled_rect = Render.FilledRect, render_rect = Render.Rect, render_line = Render.Line, convar_set_string = Convar.SetString, convar_get_string = Convar.GetString, convar_set_float = Convar.SetFloat, convar_get_float = Convar.GetFloat, convar_set_int = Convar.SetInt, convar_get_int = Convar.GetInt, event_get_string = Event.GetString, event_get_float = Event.GetFloat, event_get_int = Event.GetInt, trace_raw_line = Trace.RawLine, trace_smoke = Trace.Smoke, trace_bullet = Trace.Bullet, trace_line = Trace.Line, usercmd_get_movement = UserCMD.GetMovement, usercmd_set_view_angles = UserCMD.SetViewAngles, usercmd_send = UserCMD.Send, usercmd_choke = UserCMD.Choke, usercmd_set_buttons = UserCMD.SetButtons, usercmd_get_buttons = UserCMD.GetButtons, usercmd_set_movement = UserCMD.SetMovement, sound_stop_microphone = Sound.StopMicrophone, sound_play_microphone = Sound.PlayMicrophone, sound_play = Sound.Play, local_get_inaccuracy = Local.GetInaccuracy, local_get_spread = Local.GetSpread, local_get_fake_yaw = Local.GetFakeYaw, local_get_real_yaw = Local.GetRealYaw, local_set_clan_tag = Local.SetClanTag, local_set_view_angles = Local.SetViewAngles, local_get_view_angles = Local.GetViewAngles, local_latency = Local.Latency, cheat_is_legit_config_active = Cheat.IsLegitConfigActive, cheat_is_rage_config_active = Cheat.IsRageConfigActive, cheat_get_username = Cheat.GetUsername, cheat_print_chat = Cheat.PrintChat, cheat_register_callback = Cheat.RegisterCallback, cheat_execute_command = Cheat.ExecuteCommand, cheat_print_color = Cheat.PrintColor, cheat_print = Cheat.Print, input_force_cursor = Input.ForceCursor, input_get_cursor_position = Input.GetCursorPosition, input_is_key_pressed = Input.IsKeyPressed, world_get_server_string = World.GetServerString, world_get_map_name = World.GetMapName, antiaim_set_lby_offset = AntiAim.SetLBYOffset, antiaim_set_real_offset = AntiAim.SetRealOffset, antiaim_set_fake_offset = AntiAim.SetFakeOffset, antiaim_get_override = AntiAim.GetOverride, antiaim_set_override = AntiAim.SetOverride, exploit_override_tolerance = Exploit.OverrideTolerance, exploit_override_shift = Exploit.OverrideShift, exploit_enable_recharge = Exploit.EnableRecharge, exploit_disable_recharge = Exploit.DisableRecharge, exploit_recharge = Exploit.Recharge, exploit_get_charge = Exploit.GetCharge, ragebot_get_targets = Ragebot.GetTargets, ragebot_ignore_target = Ragebot.IgnoreTarget, ragebot_force_hitbox_safety = Ragebot.ForceHitboxSafety, ragebot_force_target_minimum_damage = Ragebot.ForceTargetMinimumDamage, ragebot_force_target_hitchance = Ragebot.ForceTargetHitchance, ragebot_force_target_safety = Ragebot.ForceTargetSafety, ragebot_force_target = Ragebot.ForceTarget, ragebot_get_target = Ragebot.GetTarget, material_refresh = Material.Refresh, material_set_key_value = Material.SetKeyValue, material_get = Material.Get, material_destroy = Material.Destroy, material_create = Material.Create
var subtab = ui_add_sub_tab(["Rage", "SUBTAB_MGR"], "[ team ]")
var enable = ui_add_checkbox(["Rage", "[ team ]", "[ team ]"], "[ team ] enable ")
var xpos = ui_add_slider_float(["Rage", "[ team ]", "[ team ]"], "[ team ] x pos", 0, parseInt(render_get_screen_size()[0]))
var ypos = ui_add_slider_float(["Rage", "[ team ]", "[ team ]"], "[ team ] y pos", 0, parseInt(render_get_screen_size()[1]))
var accent = ui_add_color_picker(["Rage", "[ team ]", "[ team ]"], "[ team ] accent")
var active = ui_add_color_picker(["Rage", "[ team ]", "[ team ]"], "[ team ] active accent")
var inactive = ui_add_color_picker(["Rage", "[ team ]", "[ team ]"], "[ team ] inactive accent")


function draw() {

	ui_set_enabled(xpos, 0)
	ui_set_enabled(ypos, 0)
    ui_set_enabled(accent, 0)
    ui_set_enabled(inactive, 0)
    ui_set_enabled(active, 0)

	if(UI.GetValue(enable)==1) {

		ui_set_enabled(xpos, 1)
		ui_set_enabled(ypos, 1)
        ui_set_enabled(accent, 1)
        ui_set_enabled(inactive, 1)
        ui_set_enabled(active, 1)

		var font = render_get_font("Verdana.ttf", 10, true)
        var font2 = render_get_font("Verdana.ttf", 8, true)
		var x = ui_get_value(xpos)
		var y = ui_get_value(ypos)
        var amount = global_choked_commands().toString()
        var get = Math.min(Math.abs(local_get_real_yaw() - local_get_fake_yaw()) / 2, 60).toFixed(0)
        var yaw = Math.round(get).toString()
        var co1 = ui_get_color(accent)
        var co2 = ui_get_color(inactive)
        var co3 = ui_get_color(active)
		var grad_1 = [ 60, 175, 220, 255 ]
		var grad_2 = [ 200, 70, 205, 255 ]
		var gray_1 = [ 19, 19, 19, 255 ]
		var gray_2 = [ 40, 40, 40, 255 ]
		var white = [ 255, 255, 255, 255 ]
    	render_filled_rect( x, y, 250, 90, [ 0, 0, 0, 255 ] )

    	render_gradient_rect(x, y + 5, 250, 2, 1, grad_1, grad_2)
        
    	render_filled_rect(x, y, 5, 90, gray_1 )
    	render_filled_rect(x + 250, y, 5, 90, gray_1 )
    	render_filled_rect(x, y, 250, 5, gray_1 )
    	render_filled_rect(x, y + 90, 255, 5, gray_1 )
    	render_rect(x, y, 255, 95, gray_2)
    	render_rect(x + 5, y + 5, 245, 85, gray_2)
    	render_filled_rect(x + 133, y + 12, 110, 7, gray_1)
        render_filled_rect(x + 133, y + 12, amount / 14 * 110, 7, co1)
        render_filled_rect(x + 133, y + 28, 110, 7, gray_1)
        render_filled_rect(x + 133, y + 28, yaw / 59 * 110, 7, co1)
    	render_string(x + 13, y + 10, 0, "Fake lag", white, font)
    	render_string(x + 13, y + 25, 0, "Body yaw", white, font)
    	render_string(x + 13, y + 40, 0, "On-shot AA", white, font)
    	render_string(x + 13, y + 55, 0, "Double tap", white, font)
    	render_string(x + 13, y + 70, 0, "Slow motion", white, font)
        render_string(x + 135 + amount / 14 * 110, y + 18, 0, amount, white, font2)
        render_string(x + 135 + yaw / 59 * 110, y + 30, 0, yaw, white, font2)

        if(ui_get_value(["Rage", "Exploits", "Keys", "Hide shots"])==1) {
            render_string(x + 215, y + 40, 0, "[On]", co3, font)

        } else {
            render_string(x + 215, y + 40, 0, "[Off]", co2, font)
        } if(ui_get_value(["Rage", "Exploits", "Keys", "Double tap"])==1) {
            render_string(x + 215, y + 55, 0, "[On]", co3, font)
        } else {
            render_string(x + 215, y + 55, 0, "[Off]", co2, font)
        } if(ui_get_value(["Rage", "Anti Aim", "General", "Key assignment", "Slow walk"])==1) {
            render_string(x + 215, y + 70, 0, "[On]", co3, font)

        } else {
                render_string(x + 215, y + 70, 0, "[Off]", co2, font)
        }
	}
}

cheat_register_callback("Draw", "draw")
