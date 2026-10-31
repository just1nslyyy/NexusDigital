from datetime import datetime
from decimal import Decimal

from sqlalchemy import (
    Boolean,
    CheckConstraint,
    DateTime,
    ForeignKey,
    Index,
    Numeric,
    String,
    Text,
    func,
)
from sqlalchemy.orm import Mapped, mapped_column

from app.db.base import Base


class Product(Base):
    __tablename__ = "products"

    __table_args__ = (
        CheckConstraint(
            "price > 0",
            name = "ck_products_price_positive",
        ),
        CheckConstraint(
            "currency IN ('USD', 'RUB')",
            name = "ck_products_currency_supported",
        ),
        Index(
            "ix_products_active_created_at",
            "is_active",
            "created_at",
        ),
    )

    id:Mapped[int] = mapped_column(
        primary_key=True,
    )

    name:Mapped[str] = mapped_column(
        String(200),
        nullable=False,
    )

    slug:Mapped[str] = mapped_column(
        String(200),
        unique=True,
        nullable=False,
    )

    description:Mapped[str] = mapped_column(
        String(200),
        nullable=False,
    )

    price:Mapped[Decimal] = mapped_column(
        Numeric(12, 2),
        nullable=False,
    )

    currency:Mapped[str] = mapped_column(
        String(3),
        default="USD",
        nullable=False,
    )

    is_active:Mapped[bool] = mapped_column(
        Boolean,
        default=True,
        nullable=False,
    )

    created_at:Mapped[datetime] = mapped_column(
        DateTime(timezone=True),
        server_default=func.now(),
        nullable=False,
    )

    updated_at:Mapped[datetime] = mapped_column(
        DateTime(timezone=True),
        server_default=func.now(),
        onupdate=func.now(),
        nullable=False,
    )

    seller_id: Mapped[int] = mapped_column(
    ForeignKey("seller_profiles.id", ondelete="RESTRICT"),
    nullable=False,
    index=True,
    )