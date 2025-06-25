##
# TODO Review the whole file and remove the variables that does not make sense
#      for this repository.
# TODO Remove this placeholder and the above when you finish to review the file.
#
# Set default variable values for the project
##
APP_NAME ?= todo
export APP_NAME

BIN ?= bin
PATH := $(CURDIR)/$(BIN):$(PATH)
export PATH

CONFIG_PATH ?= $(PROJECT_DIR)/configs
export CONFIG_PATH
CONFIG_YAML := $(CONFIG_PATH)/config.yaml

COMPOSE_FILE ?= $(PROJECT_DIR)/deploy/docker-compose.yaml

CONTAINER_IMAGE_BASE ?= quay.io/$(firstword $(subst +, ,$(QUAY_USER)))/$(APP_NAME)-$(APP_COMPONENT)

# Application specific parameters
APP_EXPIRATION_TIME ?= 15
export APP_EXPIRATION_TIME
APP_PAGINATION_DEFAULT_LIMIT ?= 10
export APP_PAGINATION_DEFAULT_LIMIT
APP_PAGINATION_MAX_LIMIT ?= 100
export APP_PAGINATION_MAX_LIMIT
# Enable IS_FAKE_ENABLED for the ephemeral deployment
APP_ACCEPT_X_RH_FAKE_IDENTITY ?= true
export APP_ACCEPT_X_RH_FAKE_IDENTITY
APP_VALIDATE_API ?= true
export APP_VALIDATE_API

# Set the default token expiration in seconds (2 hours)
APP_TOKEN_EXPIRATION_SECONDS ?= 7200
export APP_TOKEN_EXPIRATION_SECONDS

# main secret for various MAC and encryptions like
# domain registration token and encrypted private JWKs
APP_SECRET ?= sFamo2ER65JN7wxZ48UZb5GbtDc053ahIPJ0Qx47bzA
export APP_SECRET
