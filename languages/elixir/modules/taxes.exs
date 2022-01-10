defmodule Taxes do
  def orders_with_taxes(orders, taxes) do
    Enum.map(orders, &apply_taxes(&1, taxes))
  end

  defp apply_taxes(order, taxes) do
    tax = Keyword.get(taxes, order[:ship_to], 0)
    Keyword.put(order, :total, order[:net_amount] + order[:net_amount] * tax)
  end
end
