defmodule IsOk do
  def ok!({:ok, data}), do: data
  def ok!({:error, msg}), do: raise(msg)
end
