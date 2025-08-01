cfg = rs.conf()
cfg.members[n].hidden = true
cfg.members[n].priority = 0
cfg.member[n].secondaryDelaySecs = 3600
rs.reconfig(cfg)
