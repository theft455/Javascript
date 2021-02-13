const global_choked_commands = Globals.ChokedCommands, global_realtime = Globals.Realtime, global_frametime = Globals.Frametime, global_curtime = Globals.Curtime, global_tick_interval = Globals.TickInterval, global_tickrate = Globals.Tickrate, global_tickcount = Globals.Tickcount, global_frame_stage = Globals.FrameStage, ui_get_menu_position = UI.GetMenuPosition, ui_update_list = UI.UpdateList, ui_remove_item = UI.RemoveItem, ui_get_hotkey = UI.GetHotkey, ui_set_hotkey_state = UI.SetHotkeyState, ui_get_hotkey_state = UI.GetHotkeyState, ui_toggle_hotkey = UI.ToggleHotkey, ui_set_color = UI.SetColor, ui_add_sub_tab = UI.AddSubTab, ui_add_textbox = UI.AddTextbox, ui_add_color_picker = UI.AddColorPicker, ui_add_multi_dropdown = UI.AddMultiDropdown, ui_add_dropdown = UI.AddDropdown, ui_add_hotkey = UI.AddHotkey, ui_add_slider_float = UI.AddSliderFloat, ui_add_slider_int = UI.AddSliderInt, ui_add_checkbox = UI.AddCheckbox, ui_set_value = UI.SetValue, ui_get_children = UI.GetChildren, ui_get_value = UI.GetValue, ui_get_string = UI.GetString, ui_get_color = UI.GetColor, ui_is_menu_open = UI.IsMenuOpen, ui_set_enabled = UI.SetEnabled, entity_draw_flag = Entity.DrawFlag, entity_get_ccs_weapon_info = Entity.GetCCSWeaponInfo, entity_get_render_box = Entity.GetRenderBox, entity_get_weapons = Entity.GetWeapons, entity_get_entities_by_class_id = Entity.GetEntitiesByClassID, entity_get_hitbox_position = Entity.GetHitboxPosition, entity_get_eye_position = Entity.GeteyePosition, entity_get_game_rules_proxy = Entity.GetGameRulesProxy, entity_is_bot = Entity.IsBot, entity_get_weapon = Entity.GetWeapon, entity_set_prop = Entity.SetProp, entity_get_prop = Entity.GetProp, entity_get_render_origin = Entity.GetRenderOrigin, entity_get_name = Entity.GetName, entity_get_class_name = Entity.GetClassName, entity_get_class_id = Entity.GetClassID, entity_is_dormant = Entity.IsDormant, entity_is_alive = Entity.IsAlive, entity_is_valid = Entity.IsValid, entity_is_local_player = Entity.IsLocalPlayer, entity_is_enemy = Entity.IsEnemy, entity_is_teammate = Entity.IsTeammate, entity_get_entity_from_user_id = Entity.GetEntityFromUserID, entity_get_local_player = Entity.GetLocalPlayer, entity_get_teammates = Entity.GetTeammates, entity_get_enemies = Entity.GetEnemies, entity_get_players = Entity.GetPlayers, entity_get_entities = Entity.GetEntities, render_text_size = Render.TextSize, render_string = Render.String, render_filled_circle = Render.FilledCircle, render_textured_rect = Render.TexturedRect, render_add_texture = Render.AddTexture, render_find_font = Render.FindFont, render_get_font = Render.GetFont, render_polygon = Render.Polygon, render_gradient_rect = Render.GradientRect, render_get_screen_size = Render.GetScreenSize, render_world_to_screen = Render.WorldToScreen, render_circle = Render.Circle, render_filled_rect = Render.FilledRect, render_rect = Render.Rect, render_line = Render.Line, convar_set_string = Convar.SetString, convar_get_string = Convar.GetString, convar_set_float = Convar.SetFloat, convar_get_float = Convar.GetFloat, convar_set_int = Convar.SetInt, convar_get_int = Convar.GetInt, event_get_string = Event.GetString, event_get_float = Event.GetFloat, event_get_int = Event.GetInt, trace_raw_line = Trace.RawLine, trace_smoke = Trace.Smoke, trace_bullet = Trace.Bullet, trace_line = Trace.Line, usercmd_get_movement = UserCMD.GetMovement, usercmd_set_view_angles = UserCMD.SetViewAngles, usercmd_send = UserCMD.Send, usercmd_choke = UserCMD.Choke, usercmd_set_buttons = UserCMD.SetButtons, usercmd_get_buttons = UserCMD.GetButtons, usercmd_set_movement = UserCMD.SetMovement, sound_stop_microphone = Sound.StopMicrophone, sound_play_microphone = Sound.PlayMicrophone, sound_play = Sound.Play, local_get_inaccuracy = Local.GetInaccuracy, local_get_spread = Local.GetSpread, local_get_fake_yaw = Local.GetFakeYaw, local_get_real_yaw = Local.GetRealYaw, local_set_clan_tag = Local.SetClanTag, local_set_view_angles = Local.SetViewAngles, local_get_view_angles = Local.GetViewAngles, local_latency = Local.Latency, cheat_is_legit_config_active = Cheat.IsLegitConfigActive, cheat_is_rage_config_active = Cheat.IsRageConfigActive, cheat_get_username = Cheat.GetUsername, cheat_print_chat = Cheat.PrintChat, cheat_register_callback = Cheat.RegisterCallback, cheat_execute_command = Cheat.ExecuteCommand, cheat_print_color = Cheat.PrintColor, cheat_print = Cheat.Print, input_force_cursor = Input.ForceCursor, input_get_cursor_position = Input.GetCursorPosition, input_is_key_pressed = Input.IsKeyPressed, world_get_server_string = World.GetServerString, world_get_map_name = World.GetMapName, antiaim_set_lby_offset = AntiAim.SetLBYOffset, antiaim_set_real_offset = AntiAim.SetRealOffset, antiaim_set_fake_offset = AntiAim.SetFakeOffset, antiaim_get_override = AntiAim.GetOverride, antiaim_set_override = AntiAim.SetOverride, exploit_override_tolerance = Exploit.OverrideTolerance, exploit_override_shift = Exploit.OverrideShift, exploit_enable_recharge = Exploit.EnableRecharge, exploit_disable_recharge = Exploit.DisableRecharge, exploit_recharge = Exploit.Recharge, exploit_get_charge = Exploit.GetCharge, ragebot_get_targets = Ragebot.GetTargets, ragebot_ignore_target = Ragebot.IgnoreTarget, ragebot_force_hitbox_safety = Ragebot.ForceHitboxSafety, ragebot_force_target_minimum_damage = Ragebot.ForceTargetMinimumDamage, ragebot_force_target_hitchance = Ragebot.ForceTargetHitchance, ragebot_force_target_safety = Ragebot.ForceTargetSafety, ragebot_force_target = Ragebot.ForceTarget, ragebot_get_target = Ragebot.GetTarget, material_refresh = Material.Refresh, material_set_key_value = Material.SetKeyValue, material_get = Material.Get, material_destroy = Material.Destroy, material_create = Material.Create
var path = ["Rage", "[ multiple ]", "[ multiple ]"]
var sub = ui_add_sub_tab(["Rage", "SUBTAB_MGR"], "[ multiple ]")
var check = ui_add_checkbox(path, "[ multiple ] enable")
var accent = ui_add_color_picker(path, "[ multiple ] accent")
var name = ui_add_textbox(path, "[ multiple ] text")
var choke = 0, choke3 = 0, choke2 = 0, choke1 = 0, choke0 = 0

function draw() {

    ui_set_enabled(accent, 0)
    ui_set_enabled(name, 0)

    if(ui_get_value(check)==1) {

        if(global_choked_commands() < choke) {
            choke0 = choke1; choke1 = choke2; choke2 = choke3; choke3 = choke;
        }
            choke = global_choked_commands()

        ui_set_enabled(accent, 1)
        ui_set_enabled(name, 1)
    

        var font = render_get_font("Verdana.ttf", 10, true)
        var x = render_get_screen_size()[0]/2, y = render_get_screen_size()[1]/2
        var color = ui_get_color(accent)
        var nameString = ui_get_string(name)
        var desync = Math.min(Math.abs(local_get_real_yaw() - local_get_fake_yaw()) / 2, 60).toFixed(0)
        var speed = entity_get_prop(entity_get_local_player(), "CCSPlayer", "m_vecVelocity[0]")
        var vel = Math.sqrt(speed[0] * speed[0] + speed[1] * speed[1]).toFixed(0)
        var side = ui_get_value(["Rage", "Anti Aim", "General", "Key assignment", "AA Direction inverter"])

        render_filled_rect(x - 955, y - 100, 200, 20, [0, 0, 0, 150])
        render_string(x - 950, y - 98, 0, "FAKE LAG ", color, font)
            if(choke > 10) {
                render_string(x - 890, y - 98, 0, "OVERFLOW", color, font)
            } else {
                render_string(x - 890, y - 98, 0, "MINIMIZED", color, font)
            }

        render_string(x - 800, y - 98, 0, nameString, color, font)
        render_filled_rect(x - 955, y - 75, 200, 20, [0, 0, 0, 150])
        render_string(x - 950, y - 72, 0, "HISTORY: ", color, font)
        render_string(x - 895, y - 72, 0, choke3.toString() + "-" + choke2.toString() + "-" + choke1.toString() + "-" + choke0.toString(), [255, 255, 255, 255], font)
        render_gradient_rect(x - 960, y - 80, choke / 14 * 205, 5, 1, color, [0, 0, 0, 0])
        render_gradient_rect(x - 960, y - 103, 15, 50, 1, color, [0, 0, 0, 0])
        render_gradient_rect(x - 960, y - 103, 100, 3, 1, color, [0, 0, 0, 0])
        render_gradient_rect(x - 960, y - 55, 100, 3, 1, color, [0, 0, 0, 0])



        render_filled_rect(x - 955, y - 30, 200, 20, [0, 0, 0, 150])
        render_filled_rect(x - 955, y - 5, 200, 20, [0, 0, 0, 150])
        render_gradient_rect(x - 960, y - 34, 15, 52, 1, color, [0, 0, 0, 0,])
        render_gradient_rect(x - 960, y - 34, 100, 3, 1, color, [0, 0, 0, 0])
        render_gradient_rect(x - 960, y + 14, 100, 3, 1, color, [0, 0, 0, 0])
        render_string(x - 950, y - 27, 0, "DESYNC: " + desync + "*", color, font)
        
        if(side==1) {
        render_string(x - 875, y - 27, 0, "DIR: LEFT", color, font)
        } else {
            render_string(x - 875, y - 27, 0, "DIR: RIGHT", color, font)            
        }

        render_string(x - 800, y - 27, 0, nameString, color, font)
        render_gradient_rect(x - 960, y - 10, desync / 60 * 205, 5, 1, color, [0, 0, 0, 0])

        if(ui_get_value(["Rage", "Exploits", "Keys", "Double tap"])==1) {
            render_string(x - 950, y - 3, 0, "Curr. cond: Double tap", color, font)
        } else if(ui_get_value(["Rage", "Exploits", "Keys", "Hide shots"])==1) {
            render_string(x - 950, y - 3, 0, "Curr. cond: Hide shots", color, font)            
        } else {
            render_string(x - 950, y - 3, 0, "Curr. cond: None", color, font)
        }

        render_string(x - 825, y - 3, 0, "Velocity: " + vel, color, font)

    }
}

cheat_register_callback("Draw", "draw")