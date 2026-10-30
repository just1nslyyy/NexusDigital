from typing import Literal

from pydantic import model_validator
from pydantic_settings import BaseSettings, SettingsConfigDict

class Settings(BaseSettings):
    app_name: str = "NexusDigital"

    app_env: Literal[
        "development",
        "test",
        "production",
    ] = "development"

    database_url: str = (
        "postgresql+asyncpg://nexus:"
        "change_me_local_only@localhost:5432/nexusdigital"
    )

    redis_url: str = "redis://localhost:6379/0"

    telegram_bot_token: str = "change_me_local_only"

    mock_payments_enabled: bool = True

    model_config = SettingsConfigDict(
        env_file=".env",
        env_file_encoding="utf-8",
        extra="ignore",
        case_sensitive=False,
    )

    @model_validator(mode="after")
    def prevent_mock_payments_in_production(self) -> "Settings":
        if(
            self.app_env == "production"
            and self.mock_payments_enabled
        ):
            raise ValueError(
                "Mock payments must be disabled "
                "when APP_ENV=production."
            )

        return self


settings = Settings()