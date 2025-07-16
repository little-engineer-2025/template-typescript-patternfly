##
# Rules for nodejs development
##

NPM ?= $(shell which npm)
OPENAPI_TARGET := src/api
OPENAPI_LIST := $(wildcard api/*.yaml)
OPENAPI_GEN_TEMPLATE ?= typescript-redux-query

.PHONY: all
all: clean format lint test build

.PHONY: deps
deps:  ## Install dependencies
	$(NPM) install

# see: https://github.com/OpenAPITools/openapi-generator/blob/master/docs/generators/typescript-redux-query.md
.PHONY: generate-clients
generate-clients:  ## Generate API REST clients
	@rm -rf "$(OPENAPI_TARGET)"
	for item in $(OPENAPI_LIST); do item="$${item#api/}"; item="$${item%.yaml}"; $(MAKE) "$(OPENAPI_TARGET)/$${item}"; done

$(OPENAPI_TARGET)/%: api/%.yaml
	TS_POST_PROCESS_FILE="npx prettier --write" \
	npx openapi-generator-cli -- \
	  generate --enable-post-process-file \
	    -i "$<" \
	    -g $(OPENAPI_GEN_TEMPLATE) \
	    -o "$@"

.PHONY: start-dev
start-dev:  ## Start the development server
	$(NPM) run start:dev

.PHONY: build
build:  ## Build production build
	$(NPM) run build

.PHONY: test
test:  ## Run all the tests
	$(NPM) run test

.PHONY: test-unit
test-unit:  ## Run unit tests
	$(NPM) run test

.PHONY: test-e2e
test-e2e:  ## Run end to end tests
	$(NPM) run test

.PHONY: test-cov
test-cov:  ## Show coverage report from unit tests
	$(NPM) run test:coverage

.PHONY: format
format:  ## Apply format configuration to source code
	$(NPM) run format

.PHONY: lint
lint:  ## Run code linter
	$(NPM) run lint

