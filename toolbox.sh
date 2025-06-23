#!/bin/bash
#
# SPDX-License-Identifier: MIT
# Copyright (c) 2025 Alejandro Visiedo <alejandro.visiedo@gmail.com>
#
# Prepare shell profile

pkgs+=(make shellcheck java-latest-openjdk)
source "${TOOLBOX_PROFILE_PATH}/toolbox.common.sh"

# Additional steps
toolbox enter "${TOOLBOX}" <<EOF
sudo dnf install -y neovim nodejs
exit
EOF

toolbox_helper_install_vscode

# Install nodejs dependencies
make deps

